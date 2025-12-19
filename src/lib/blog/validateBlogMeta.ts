import { BlogMetadata } from '@/types';

export function validateBlogMetadata(metadata: unknown, filename: string): asserts metadata is Omit<BlogMetadata, 'slug'> {
    
    if (!metadata || typeof metadata !== 'object'){
        throw new Error(`Invalid blog metadata in: ${filename} \n Metadata must be an object`);
    }
    // record<string, unknown> is a type that represents an object with any number of properties, where each property can have any type.
    const data = metadata as Record<string, unknown>;
    const errors = [];

    //Required Fields
    if (typeof data.title !== 'string' || !data.title) {
        errors.push(`Title is missing or invalid`);
    }
    if (typeof data.summary !== 'string' || !data.summary) {
        errors.push(`Summary is missing or invalid`);
    }
    if (typeof data.date !== 'string' || isNaN(Date.parse(data.date))) {
        errors.push(`Date is missing or invalid`);
    }

    //Optional Fields
    if (data.readTime !== undefined && typeof data.readTime !== 'string') {
        errors.push(`Read time is invalid`);
    }
    if (data.tags !== undefined &&(!Array.isArray(data.tags) || data.tags.some(tag => typeof tag !== 'string'))) {
        errors.push('"tags" must be an array of strings if provided');
    }
    if (data.lastUpdated !== undefined && typeof data.lastUpdated !== 'string') {
        errors.push(`Last updated is invalid`);
    }

    if (errors.length > 0) {
    throw new Error(
      `Invalid blog metadata in src/contents/blogs/${filename}.mdx:\n` +
        errors.map(err => `- ${err}`).join('\n')
    );
  }
    
}