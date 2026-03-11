"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  resetPassword: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        // For demo purposes, let's check localStorage
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, let's simulate a successful login
      if (email === "demo@example.com" && password === "password") {
        const userData = {
          id: "1",
          email: "demo@example.com",
          name: "Demo User",
          role: "user",
        }

        // Store user data and token
        localStorage.setItem("user", JSON.stringify(userData))
        localStorage.setItem("auth_token", "demo_token_12345")

        setUser(userData)
        return { success: true }
      }

      return { success: false, error: "Invalid email or password" }
    } catch (error) {
      return { success: false, error: "An error occurred during login" }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

            if (userData.email === "demo@example.com") {
        return { success: false, error: "This email is already registered" }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: "An error occurred during registration" }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Clear stored data
      localStorage.removeItem("user")
      localStorage.removeItem("auth_token")

      setUser(null)

      // Redirect to home page
      router.push("/")

      return { success: true }
    } catch (error) {
      return { success: false, error: "An error occurred during logout" }
    } finally {
      setIsLoading(false)
    }
  }

  const forgotPassword = async (email) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { success: true }
    } catch (error) {
      return { success: false, error: "An error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (token, newPassword) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

    
      if (!token) {
        return { success: false, error: "Invalid or expired token" }
      }

      return { success: true }
    } catch (error) {
      return { success: false, error: "An error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
