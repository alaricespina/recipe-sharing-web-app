# TypeScript Interfaces

## Component Props

### Layout Components
```typescript
interface LayoutProps {
  children: React.ReactNode;
}

interface NavbarProps {
  user?: UserSession;
  onLogout: () => void;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
```

### Recipe Components
```typescript
interface RecipeCardProps {
  recipe: Recipe;
  variant?: 'compact' | 'full';
  onLike?: (id: string) => void;
  onSave?: (id: string) => void;
}

interface RecipeFormProps {
  initialData?: Partial<Recipe>;
  onSubmit: (data: RecipeFormData) => Promise<void>;
  isLoading?: boolean;
}

interface RecipeFilterProps {
  filters: RecipeFilters;
  onChange: (filters: RecipeFilters) => void;
}

interface RecipeInstructionsProps {
  instructions: Recipe['instructions'];
  currentStep?: number;
  onStepComplete?: (step: number) => void;
}
```

### User Components
```typescript
interface UserProfileProps {
  user: User;
  isOwnProfile?: boolean;
  onFollow?: () => void;
}

interface UserAvatarProps {
  user: Pick<User, 'username' | 'profilePicture'>;
  size?: 'sm' | 'md' | 'lg';
  showStatus?: boolean;
}

interface UserStatsProps {
  recipesCount: number;
  followersCount: number;
  followingCount: number;
}
```

### Form Components
```typescript
interface InputFieldProps {
  name: string;
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

interface SelectFieldProps<T> {
  name: string;
  label: string;
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
  error?: string;
}

interface FileUploadProps {
  accept?: string;
  maxSize?: number;
  onUpload: (file: File) => Promise<void>;
  error?: string;
}
```

### Interactive Components
```typescript
interface TimerProps {
  duration: number;
  onComplete?: () => void;
  onPause?: () => void;
  onResume?: () => void;
}

interface RatingInputProps {
  value: number;
  onChange: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

## State Management Types

### Authentication
```typescript
interface UserSession {
  user: User;
  token: string;
  expiresAt: number;
}

interface AuthState {
  session: UserSession | null;
  isLoading: boolean;
  error: string | null;
}
```

### Recipe Management
```typescript
interface RecipeState {
  recipes: Record<string, Recipe>;
  isLoading: boolean;
  error: string | null;
  filters: RecipeFilters;
}

interface RecipeFilters {
  cuisine?: string[];
  dietary?: string[];
  difficulty?: string;
  prepTime?: number;
  search?: string;
}
```

### UI State
```typescript
interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  activeModals: string[];
  notifications: Notification[];
}
```

## Utility Types

### API Related
```typescript
interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}
```

### Form Types
```typescript
interface RecipeFormData {
  title: string;
  description: string;
  cuisine: string;
  difficulty: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Array<{
    name: string;
    amount: number;
    unit: string;
  }>;
  instructions: Array<{
    step: number;
    description: string;
  }>;
}

interface UserFormData {
  username: string;
  email: string;
  password?: string;
  bio?: string;
  dietaryPreferences?: string[];
}
```

### Helper Types
```typescript
type ID = string;

type Nullable<T> = T | null;

type Optional<T> = T | undefined;

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};
```

## Event Handlers
```typescript
interface DragEvents {
  onDragStart: (event: React.DragEvent) => void;
  onDragEnd: (event: React.DragEvent) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
}

interface TouchEvents {
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchMove: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
}
