export interface Recipe {
  id: string;
  authorId: string;
  title: string;
  description: string;
  cuisine: string;
  difficulty: 'easy' | 'medium' | 'hard';
  
  // Time details
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  
  // Recipe details
  servings: number;
  ingredients: {
    name: string;
    amount: number;
    unit: string;
    notes?: string;
    substitutes?: string[];
  }[];
  
  instructions: {
    step: number;
    description: string;
    image?: string;
    timer?: number; // in minutes
  }[];
  
  // Media
  images: {
    url: string;
    isPrimary: boolean;
    caption?: string;
  }[];
  video?: {
    url: string;
    thumbnailUrl: string;
    duration: number; // in seconds
  };
  
  // Tags and categories
  tags: string[];
  dietaryTags: string[]; // e.g., vegetarian, vegan, gluten-free
  category: string; // e.g., main course, dessert, appetizer
  
  // Nutrition (per serving)
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    sugar: number;
    sodium: number;
  };
  
  // Engagement metrics
  stats: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
    saves: number;
    averageRating: number;
    totalRatings: number;
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  
  // Status
  status: 'draft' | 'published' | 'archived';
  isPrivate: boolean;
  
  // Additional features
  equipment: string[]; // Required cooking equipment
  tips?: string[]; // Cooking tips
  notes?: string; // Author's notes
  estimatedCost?: {
    amount: number;
    currency: string;
  };
}
