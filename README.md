QBot (REPL/TUI for MCP)

Natural‑language REPL/TUI to explore and use MCP tools from your terminal, now with LLM chat powered by Abso and tool‑calling wired to your connected MCP server.

## Quick start

- Run with Bun (preferred):
  - `cd examples/qbot`
  - `bun run dev -- --url http://localhost:3000/mcp`

## Features

- Interactive REPL (`qbot>` prompt), history
- MCP over HTTP/SSE: list/call tools, list/read resources, list/get prompts
- LLM chat via Abso with MCP tool‑calling (OpenAI‑tools compatible)
- Slash commands:
  - Core: `/help`, `/connect`, `/status`, `/tools`, `/call`, `/resources`, `/read`, `/prompts`, `/prompt`, `/history`, `/log`, `/run`, `/exit`
  - Logs: `/logtail [N]` (tail new log lines until Enter; optional last N lines)
  - Logging: `/loglevel <debug|info|warn|error> [llm]` (sets global or LLM-only level)
  - LLM: `/llm status`, `/llm provider <openai|groq|openrouter|anthropic|ollama>`, `/llm model <modelId>`, `/llm key <provider> <apiKey>`, `/llm base <provider> <baseUrl>`
  - Session: `/reconnect` (confirm and auto-refresh), `/refresh` (reload tools/resources/prompts)
- Safe shell runs: never auto‑exec, confirm before running
- Config at `~/.qbot/config.json` (MCP headers, LLM provider/model/keys)
  - Logging: `logging.level` controls global logs; `llm.logLevel` controls LLM pipeline logs. Levels: `debug`, `info`, `warn`, `error`.

## Key files

- `examples/qbot/src/index.ts` — REPL entrypoint + natural language chat
- `examples/qbot/src/llm.ts` — Abso client and MCP tools integration (tool loop)
- `examples/qbot/src/mcp/client.ts` — CLI MCP client wrapper (no browser OAuth)
- `examples/qbot/src/commands.ts` — Slash commands (core + LLM management)
- `examples/qbot/src/ui/print.ts` — ANSI color output, boxes
- `examples/qbot/src/config.ts` — Load/save config (~/.qbot/config.json)
- `examples/qbot/src/session.ts` — Chat session persistence
- `examples/qbot/src/shell.ts` — Safe shell execution (no pipes/redirects)

## Usage

Start a local MCP server first (e.g. examples/servers/hono-mcp)

In another terminal:

- `cd examples/qbot`
- `bun run dev -- --url http://localhost:3000/mcp`

### Example session

- qbot> /connect http://localhost:3000/mcp
- qbot> /tools
- qbot> /call get_vengabus_times {}
- qbot> /resources
- qbot> /read docs://party-manual.md
- qbot> /llm provider groq
- qbot> /llm key groq <GROQ_API_KEY>
- qbot> /llm model llama-3.3-70b-versatile
- qbot> Hello! Please summarize the resource above and call any MCP tools you need.
  
If you change `mcp.url` or `mcp.headers` via `/set`, qbot will offer to reconnect immediately. You can also run `/reconnect` anytime; it will confirm and then auto-refresh MCP metadata. Use `/refresh` to manually resync tools/resources/prompts.

**Tips**

- Use `/log` to view current logs (now filtered).
- Increase verbosity temporarily with:
  - `/set logging.level=debug`
  - `/set llm.logLevel=debug`
- Reduce noise:
  - `/set llm.logLevel=warn` to hide [llm] debug/info logs.

A simple `/loglevel` command and config support to control verbosity without using /set by hand.

- `/loglevel <debug|info|warn|error> [llm]`
- Sets global log level by default; add “llm” to target LLM-only logs.
- Applies immediately via mcp.setLogLevels and persists in config.

Config support

- Global: `logging.level`
- LLM-specific: `llm.logLevel`
- Both can be set via `/loglevel` or `/set`.

Filtering behavior

- Global threshold applies to all logs.
- LLM logs (prefixed with [llm]) use `llm.logLevel` if set, otherwise inherit global threshold.


### Config file

- Path: `~/.qbot/config.json`
- Example:
{
  "mcp": {
    "url": "http://localhost:3000/mcp",
    "headers": { "Authorization": "Bearer ..." }
  },
  "llm": {
    "provider": "groq",
    "model": "llama-3.3-70b-versatile",
    "apiKeys": { "groq": "<GROQ_API_KEY>", "openrouter": "<OPENROUTER_API_KEY>", "openai": "<OPENAI_API_KEY>", "anthropic": "<ANTHROPIC_API_KEY>" },
    "baseUrls": { "ollama": "http://localhost:11434/v1" },
    "logLevel": "info"
  },
  "logging": {
    "level": "info"
  }
}
