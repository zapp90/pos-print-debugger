# POS Print Debugger

A Node.js-based ESC/POS simulator to debug and visualize raw printer commands before sending them to a physical printer.

##  Features

- Accepts raw ESC/POS commands via text input or file
- Parses and visualizes output (text, formatting, line feeds)
- Logs hex codes for debugging
- Preview printed layout in terminal or export as mock receipt image (future)

##  Tech Stack

- Node.js
- TypeScript (optional)
- ANSI colors for formatting
- CLI interface via `inquirer` or simple `readline`

##  Installation

```bash
git clone https://github.com/yourusername/pos-print-debugger.git
cd pos-print-debugger
npm install
