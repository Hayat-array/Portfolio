// Comprehensive MongoDB Database Manager
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

class DatabaseManager {
    constructor() {
        this.client = null;
        this.db = null;
    }

    async connect() {
        if (!uri) {
            throw new Error('MONGODB_URI not found in .env.local');
        }

        const options = {
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 15000,
            retryWrites: true,
            retryReads: true,
        };

        this.client = new MongoClient(uri, options);
        await this.client.connect();
        this.db = this.client.db('portfolio');
        console.log('✅ Connected to MongoDB Atlas');
    }

    async disconnect() {
        if (this.client) {
            await this.client.close();
            console.log('🔌 Disconnected from MongoDB');
        }
    }

    // Projects Management
    async getAllProjects() {
        return await this.db.collection('projects').find({}).toArray();
    }

    async addProject(project) {
        const result = await this.db.collection('projects').insertOne({
            ...project,
            createdAt: new Date(),
        });
        console.log(`✅ Added project: ${project.title}`);
        return result;
    }

    async updateProject(title, updates) {
        const result = await this.db.collection('projects').updateOne(
            { title },
            { $set: { ...updates, updatedAt: new Date() } }
        );
        console.log(`✅ Updated project: ${title}`);
        return result;
    }

    async deleteProject(title) {
        const result = await this.db.collection('projects').deleteOne({ title });
        console.log(`🗑️ Deleted project: ${title}`);
        return result;
    }

    // Contacts Management
    async getAllContacts() {
        return await this.db.collection('contacts').find({}).sort({ createdAt: -1 }).toArray();
    }

    async getRecentContacts(limit = 10) {
        return await this.db.collection('contacts').find({}).sort({ createdAt: -1 }).limit(limit).toArray();
    }

    // Database Stats
    async getStats() {
        const projectsCount = await this.db.collection('projects').countDocuments();
        const contactsCount = await this.db.collection('contacts').countDocuments();
        const collections = await this.db.listCollections().toArray();

        return {
            collections: collections.map(c => c.name),
            projectsCount,
            contactsCount,
        };
    }

    // Display formatted data
    async displayProjects() {
        const projects = await this.getAllProjects();
        console.log(`\n📊 Total Projects: ${projects.length}\n`);
        projects.forEach((p, i) => {
            console.log(`${i + 1}. ${p.title}`);
            console.log(`   Category: ${p.category}`);
            console.log(`   Tags: ${p.tags?.join(', ') || 'N/A'}`);
            console.log(`   Link: ${p.link || 'N/A'}`);
            console.log('');
        });
    }

    async displayContacts() {
        const contacts = await this.getRecentContacts();
        console.log(`\n📧 Recent Contacts (Last ${contacts.length}):\n`);
        contacts.forEach((c, i) => {
            console.log(`${i + 1}. ${c.name} (${c.email})`);
            console.log(`   Message: ${c.message.substring(0, 100)}...`);
            console.log(`   Date: ${c.createdAt?.toLocaleString() || 'N/A'}`);
            console.log('');
        });
    }

    async displayStats() {
        const stats = await this.getStats();
        console.log('\n📊 Database Statistics:\n');
        console.log(`Collections: ${stats.collections.join(', ')}`);
        console.log(`Projects: ${stats.projectsCount}`);
        console.log(`Contacts: ${stats.contactsCount}`);
    }
}

// CLI Interface
async function main() {
    const manager = new DatabaseManager();

    try {
        console.log('🔗 Connecting to MongoDB Atlas...\n');
        await manager.connect();

        const args = process.argv.slice(2);
        const command = args[0] || 'stats';

        switch (command) {
            case 'projects':
                await manager.displayProjects();
                break;
            case 'contacts':
                await manager.displayContacts();
                break;
            case 'stats':
                await manager.displayStats();
                break;
            case 'all':
                await manager.displayStats();
                await manager.displayProjects();
                await manager.displayContacts();
                break;
            default:
                console.log('Usage: node db-manager.mjs [command]');
                console.log('Commands:');
                console.log('  stats    - Show database statistics (default)');
                console.log('  projects - List all projects');
                console.log('  contacts - List recent contacts');
                console.log('  all      - Show everything');
        }

        console.log('\n✨ Done!');

    } catch (error) {
        console.error('\n❌ Error:', error.message);

        if (error.message.includes('ETIMEDOUT')) {
            console.error('\n🔍 Network Access Issue:');
            console.error('   Please whitelist your IP in MongoDB Atlas Network Access settings');
            console.error('   Visit: https://cloud.mongodb.com/ → Network Access → Add IP Address');
        }

        process.exit(1);
    } finally {
        await manager.disconnect();
    }
}

// Export for use in other scripts
export default DatabaseManager;

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}
