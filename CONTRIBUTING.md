# Adding a New Protocol to Schemata

Schemata is designed to be **modular and fast** — adding a new protocol takes less than 5 minutes.

## Quick Start

1. **Create a JSON file** in `src/data/protocols/`
2. **Name it** after the scheme (e.g., `slack.json` for `slack://`)
3. **Use this template:**

```json
{
  "scheme": "your-scheme",
  "name": "App Name",
  "description": "What this protocol does",
  "platforms": ["windows", "macos", "linux", "ios", "android"],
  "syntax": "scheme://[command]/[parameters]",
  "commands": [
    {
      "command": "example/command",
      "description": "What this command does",
      "parameters": [
        {
          "name": "paramName",
          "type": "string",
          "required": true,
          "description": "Parameter description",
          "example": "exampleValue"
        }
      ],
      "example": "scheme://example/command?paramName=exampleValue"
    }
  ],
  "metadata": {
    "lastVerified": "2026-01",
    "contributors": ["Your Name"]
  }
}
```

4. **That's it!** The protocol will automatically appear on the homepage and get its own page at `/protocol/your-scheme`

## Parameter Types

- `string` - Text values
- `number` - Numeric IDs
- `boolean` - True/false flags
- `url` - URL-encoded strings
- `enum` - Predefined values (add a `values` array)

## Platform Values

Use one or more:
- `windows`
- `macos`
- `linux`
- `ios`
- `android`

## Auto-Discovery

Schemata uses Vite's `import.meta.glob` to automatically:
- ✅ Import all JSON files from `src/data/protocols/`
- ✅ Generate static pages for each protocol
- ✅ Display them on the homepage grid
- ✅ Enable search and filtering (coming soon)

**No build configuration needed. No imports to update. Just drop in a JSON file.**

---

## Example: Adding Slack

`src/data/protocols/slack.json`:

```json
{
  "scheme": "slack",
  "name": "Slack",
  "description": "Open Slack channels, DMs, and workspaces",
  "platforms": ["windows", "macos", "linux", "ios", "android"],
  "syntax": "slack://[path]",
  "commands": [
    {
      "command": "channel/[channelId]",
      "description": "Open a specific channel",
      "parameters": [
        {
          "name": "channelId",
          "type": "string",
          "required": true,
          "description": "Channel ID (starts with C)",
          "example": "C1234567890"
        }
      ],
      "example": "slack://channel/C1234567890"
    }
  ],
  "metadata": {
    "lastVerified": "2026-01",
    "contributors": ["Schemata Team"]
  }
}
```

Save the file → Refresh → Done. Your protocol is live.

---

## TypeScript Support

The `Protocol` interface in `src/types/protocol.ts` provides full type safety. Your JSON will be validated at build time.

## Contributing

Open a PR with your protocol JSON file! We'll review and merge quickly.
