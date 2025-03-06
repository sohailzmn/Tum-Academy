
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  enrolledCourses: string[];
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage (this would be replaced with a proper token check)
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("user");
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // This is a mock implementation, would be replaced with an actual API call
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept specific credentials
      if (email === "user@example.com" && password === "password") {
        const mockUser: User = {
          id: "user123",
          name: "Demo User",
          email: "user@example.com",
          role: "user",
          enrolledCourses: ["course1"]
        };
        
        localStorage.setItem("user", JSON.stringify(mockUser));
        setUser(mockUser);
        toast.success("Erfolgreich angemeldet!");
        return true;
      } else if (email === "admin@example.com" && password === "admin") {
        const mockAdmin: User = {
          id: "admin123",
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
          enrolledCourses: []
        };
        
        localStorage.setItem("user", JSON.stringify(mockAdmin));
        setUser(mockAdmin);
        toast.success("Als Administrator angemeldet!");
        return true;
      } else {
        toast.error("Ungültige Anmeldedaten");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Anmeldung fehlgeschlagen");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // This is a mock implementation, would be replaced with an actual API call
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a new user
      const newUser: User = {
        id: `user_${Date.now()}`,
        name,
        email,
        role: "user",
        enrolledCourses: []
      };
      
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      toast.success("Registrierung erfolgreich!");
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registrierung fehlgeschlagen");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Erfolgreich abgemeldet");
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
