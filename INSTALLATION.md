# Kaija Tire Landing Page - Installation Guide

## Prerequisites

- Node.js (version 18 or higher recommended)
- pnpm package manager

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kaija-tire-landing-page
   ```

2. **Install dependencies using pnpm**
   ```bash
   pnpm install
   ```
   
   > **Note**: This project uses pnpm. If you don't have pnpm installed, you can install it globally with:
   ```bash
   npm install -g pnpm
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Or build and start the production server**
   ```bash
   pnpm build
   pnpm start
   ```

## Important Notes

- The `node_modules` directory is not included in the repository
- Dependencies will be installed automatically from `package.json` and `pnpm-lock.yaml`
- SWC (Speedy Web Compiler) binaries will be downloaded and compiled specifically for the target architecture during installation
- The `pnpm-lock.yaml` file ensures consistent dependency versions across environments

## Troubleshooting

If you encounter issues with SWC binaries:

1. Try clearing the pnpm cache:
   ```bash
   pnpm store prune
   ```

2. Delete node_modules and reinstall:
   ```bash
   rm -rf node_modules
   pnpm install
   ```

3. For Windows-specific SWC issues, make sure you have the required build tools installed:
   ```bash
   npm install --global windows-build-tools
   ```