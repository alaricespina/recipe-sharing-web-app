export interface User {
  id: string;
  username: string;
  email: string;
  password: string; // Hashed
  profilePicture?: string;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  cookingExperience: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  dietaryPreferences: string[];
  createdAt: Date;
  updatedAt: Date;
  
  // Stats
  recipesCount: number;
  followersCount: number;
  followingCount: number;
  
  // Settings
  preferences: {
    measurementSystem: 'metric' | 'imperial';
    emailNotifications: boolean;
    privacySettings: {
      profileVisibility: 'public' | 'private';
      showCookingActivity: boolean;
    };
  };
}
