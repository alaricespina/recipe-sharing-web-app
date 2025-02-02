export interface Comment {
  id: string;
  recipeId: string;
  userId: string;
  content: string;
  images?: string[];
  rating?: number;
  likes: number;
  parentCommentId?: string; // For replies
  createdAt: Date;
  updatedAt: Date;
  isEdited: boolean;
}

export interface Rating {
  id: string;
  recipeId: string;
  userId: string;
  score: number; // 1-5
  review?: string;
  images?: string[];
  madeRecipe: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MealPlan {
  id: string;
  userId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  meals: {
    date: Date;
    slots: {
      type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
      recipeId: string;
      servings: number;
      notes?: string;
    }[];
  }[];
  groceryList: {
    id: string;
    items: {
      ingredient: string;
      amount: number;
      unit: string;
      checked: boolean;
      category: string;
    }[];
  };
  isTemplate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInteraction {
  id: string;
  userId: string;
  recipeId: string;
  type: 'view' | 'like' | 'save' | 'share' | 'cook';
  timestamp: Date;
}

export interface Collection {
  id: string;
  userId: string;
  name: string;
  description?: string;
  image?: string;
  recipes: string[]; // Array of recipe IDs
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserFollowing {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'recipe';
  sourceId: string; // ID of the source object (recipe, comment, etc.)
  sourceUserId: string;
  read: boolean;
  createdAt: Date;
}

export interface CookingSession {
  id: string;
  userId: string;
  recipeId: string;
  startTime: Date;
  endTime?: Date;
  currentStep: number;
  timers: {
    stepNumber: number;
    duration: number;
    startTime: Date;
    endTime?: Date;
  }[];
  completed: boolean;
  notes?: string;
}
