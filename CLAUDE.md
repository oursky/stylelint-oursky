# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a stylelint plugin package (`@oursky/stylelint-oursky`) that provides custom CSS linting rules and configurations.
The main purpose is to provide opinionated configuration for stylelint at Oursky.

## Common Commands

### Testing
```bash
npm test                    # Run Jest tests
```

### Code Formatting
```bash
npm run format             # Format code with Prettier
```

### Rule Management
```bash
make check-rules-are-up-to-date        # Check if rules are up to date
make check-all-rules-are-considered    # Verify all rules are considered
```

## Architecture

### Core Components

- **`src/index.mjs`**: Main plugin implementation containing the `oursky/flex` rule
- **`config/oursky.mjs`**: Main configuration that extends base stylelint config and includes custom rules
- **`config/stylelint.mjs`**: Base stylelint configuration with comprehensive rule definitions
- **`src/index.test.js`**: Test suite for the plugin

### Plugin Structure

The plugin implements a single custom rule `oursky/flex` that:
- Enforces 3-value flex shorthand syntax (`flex: <grow> <shrink> <basis>`)
- Requires units for flex-basis values
- Prohibits individual flex properties (`flex-grow`, `flex-shrink`, `flex-basis`) in favor of shorthand
- This rule is for Internet Explorer, which has been deprecated long ago. The use of the rule is no longer recommended. The rule is kept for compatibility though.

### Configuration Hierarchy

1. `config/stylelint.mjs` - Base rules configuration
2. `config/oursky.mjs` - Extends base config, adds custom plugins and rules
3. External plugins: `stylelint-no-unsupported-browser-features`

### Testing

Tests use Jest with ES modules (`--experimental-vm-modules` flag) and include snapshot testing for linting results.

## Development Notes

- Project uses ES modules (`"type": "module"` in package.json)
- Requires Node.js experimental VM modules support for testing
- Configuration files use `.mjs` extension