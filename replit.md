# Overview

This is a modern full-stack web application built with React and Express.js that serves as a landing page with waitlist functionality. The application features a clean, responsive design using shadcn/ui components and Tailwind CSS, with a robust backend API for handling waitlist signups. The system is designed to collect user information including email, company details, subscriber counts, and platform preferences.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state and form handling with React Hook Form
- **Routing**: Wouter for lightweight client-side routing
- **Form Validation**: Zod schemas with React Hook Form integration

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Setup**: Hot reload with Vite integration in development mode
- **Session Management**: PostgreSQL session store using connect-pg-simple

## Database Schema
- **Users Table**: Basic user authentication with username/password
- **Waitlist Entries Table**: Stores email, company, subscriber count, platform, and timestamp
- **Migration System**: Drizzle Kit for database schema management

## Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: PostgreSQL-backed sessions
- **Development Fallback**: In-memory storage implementation for development/testing

## Authentication & Authorization
- **Session-based Authentication**: Using Express sessions with PostgreSQL storage
- **Input Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Build & Deployment
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Development**: Concurrent client and server with hot reload
- **Production**: Bundled server with static client assets
- **TypeScript**: Strict mode with path mapping for clean imports

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: TypeScript-first ORM for database operations
- **connect-pg-simple**: PostgreSQL session store for Express

## UI & Styling
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI

## Development Tools
- **Vite**: Frontend build tool with hot module replacement
- **esbuild**: Fast JavaScript bundler for server build
- **TypeScript**: Type checking and development experience
- **Replit Integration**: Development environment optimization for Replit

## Frontend Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **Wouter**: Lightweight routing solution
- **date-fns**: Date manipulation utilities
- **class-variance-authority**: Component variant management