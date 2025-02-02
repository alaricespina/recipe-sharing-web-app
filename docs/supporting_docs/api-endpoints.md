# API Endpoints Documentation

## Authentication
```
POST    /api/auth/register          # Register new user
POST    /api/auth/login             # Login user
POST    /api/auth/logout            # Logout user
POST    /api/auth/refresh-token     # Refresh access token
POST    /api/auth/forgot-password   # Request password reset
POST    /api/auth/reset-password    # Reset password
GET     /api/auth/me                # Get current user
```

## Users
```
GET     /api/users                  # List users
GET     /api/users/:id             # Get user profile
PUT     /api/users/:id             # Update user profile
DELETE  /api/users/:id             # Delete user account
GET     /api/users/:id/recipes     # Get user's recipes
GET     /api/users/:id/collections # Get user's collections
GET     /api/users/:id/following   # Get users being followed
GET     /api/users/:id/followers   # Get user's followers
POST    /api/users/:id/follow      # Follow user
DELETE  /api/users/:id/follow      # Unfollow user
```

## Recipes
```
GET     /api/recipes                # List recipes
POST    /api/recipes                # Create recipe
GET     /api/recipes/:id           # Get recipe details
PUT     /api/recipes/:id           # Update recipe
DELETE  /api/recipes/:id           # Delete recipe
GET     /api/recipes/featured      # Get featured recipes
GET     /api/recipes/trending      # Get trending recipes
GET     /api/recipes/search        # Search recipes
POST    /api/recipes/:id/like      # Like recipe
DELETE  /api/recipes/:id/like      # Unlike recipe
POST    /api/recipes/:id/save      # Save recipe
DELETE  /api/recipes/:id/save      # Unsave recipe
```

## Comments & Reviews
```
GET     /api/recipes/:id/comments  # Get recipe comments
POST    /api/recipes/:id/comments  # Add comment
PUT     /api/comments/:id          # Update comment
DELETE  /api/comments/:id          # Delete comment
POST    /api/recipes/:id/ratings   # Rate recipe
PUT     /api/ratings/:id           # Update rating
DELETE  /api/ratings/:id           # Delete rating
```

## Collections
```
GET     /api/collections           # List user's collections
POST    /api/collections           # Create collection
GET     /api/collections/:id       # Get collection
PUT     /api/collections/:id       # Update collection
DELETE  /api/collections/:id       # Delete collection
POST    /api/collections/:id/recipes/:recipeId  # Add recipe to collection
DELETE  /api/collections/:id/recipes/:recipeId  # Remove recipe from collection
```

## Meal Planning
```
GET     /api/meal-plans            # List meal plans
POST    /api/meal-plans            # Create meal plan
GET     /api/meal-plans/:id        # Get meal plan
PUT     /api/meal-plans/:id        # Update meal plan
DELETE  /api/meal-plans/:id        # Delete meal plan
POST    /api/meal-plans/:id/copy   # Copy meal plan as template
GET     /api/meal-plans/templates  # Get meal plan templates
```

## Shopping Lists
```
GET     /api/shopping-lists        # List shopping lists
POST    /api/shopping-lists        # Create shopping list
GET     /api/shopping-lists/:id    # Get shopping list
PUT     /api/shopping-lists/:id    # Update shopping list
DELETE  /api/shopping-lists/:id    # Delete shopping list
PUT     /api/shopping-lists/:id/items/:itemId  # Toggle item status
```

## Interactive Cooking
```
POST    /api/cooking/start/:recipeId     # Start cooking session
PUT     /api/cooking/:sessionId          # Update cooking progress
POST    /api/cooking/:sessionId/timer    # Start timer
DELETE  /api/cooking/:sessionId/timer    # Cancel timer
PUT     /api/cooking/:sessionId/complete # Complete cooking session
```

## Recommendations
```
GET     /api/recommendations/recipes     # Get recipe recommendations
GET     /api/recommendations/users      # Get user recommendations
GET     /api/recommendations/trending   # Get trending content
```

## Notifications
```
GET     /api/notifications              # Get user notifications
PUT     /api/notifications/:id          # Mark notification as read
DELETE  /api/notifications/:id          # Delete notification
PUT     /api/notifications/read-all     # Mark all notifications as read
```

## Media Upload
```
POST    /api/upload/image               # Upload image
POST    /api/upload/video               # Upload video
DELETE  /api/media/:id                  # Delete media
```

## Utilities
```
GET     /api/ingredients/substitutes    # Get ingredient substitutes
GET     /api/ingredients/nutrition      # Get ingredient nutrition info
POST    /api/recipes/convert-units      # Convert recipe units
GET     /api/tips/search               # Search cooking tips
```

## Response Format
```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  pagination?: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
```

## Error Codes
```
AUTH_001: Invalid credentials
AUTH_002: Token expired
AUTH_003: Invalid token
AUTH_004: Unauthorized access

USER_001: User not found
USER_002: Invalid user data
USER_003: Email already exists
USER_004: Username already exists

RECIPE_001: Recipe not found
RECIPE_002: Invalid recipe data
RECIPE_003: Unauthorized recipe access

MEDIA_001: Upload failed
MEDIA_002: Invalid file type
MEDIA_003: File too large

GENERAL_001: Invalid request
GENERAL_002: Server error
