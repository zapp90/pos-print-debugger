#  POS Print Debugger

**POS Print Debugger** is a simple but powerful CLI tool built with Node.js that helps you **simulate, parse, and debug ESC/POS print commands** — without needing a physical printer.

This tool is useful for:
- POS system developers
- Receipt layout designers
- Debugging raw print command outputs

---

##  Features

- ✅ Parse and visualize ESC/POS commands from raw byte sequences  
- ✅ Recognize basic control sequences: initialization, bold, line feed, etc.  
- ✅ Highlights printable characters vs control codes  
- ✅ View output directly in terminal  
- ✅ Simple CLI usage with sample input files  

---

##  Installation & Usage

```bash
git clone https://github.com/yourusername/pos-print-debugger.git
cd pos-print-debugger
npm install
```

### ▶ Run with included sample file

```bash
node index.js ./samples/sample1.txt
```

### ▶ Create your own test file

1. Open any text editor  
2. Paste the following and save it as `samples/my_test.txt`:

```
\x1B\x40\x1B\x21\x20Hello, world!\x0A\x0A
```

3. Then run:

```bash
node index.js ./samples/my_test.txt
```

The tool will:
- Convert hex-style `\x` input into real bytes  
- Parse ESC/POS commands  
- Show readable output in terminal using color formatting

---

##  Sample Input File

```txt
\x1B\x40\x1B\x21\x20Hello, world!\x0A\x0A
```

### Breakdown

| Bytes           | Description                      |
|-----------------|----------------------------------|
| `\x1B\x40`       | ESC @ – Initialize printer       |
| `\x1B\x21\x20`   | ESC ! 0x20 – Bold print mode     |
| `Hello, world!` | Printable ASCII text             |
| `\x0A\x0A`       | Line feed (new lines)            |

---

##  Directory Structure

```
pos-print-debugger/
├── index.js               # Main logic to parse ESC/POS bytes
├── package.json           # Project metadata and dependencies
├── README.md              # This file
├── LICENSE                # MIT License
└── samples/
    └── sample1.txt        # Sample ESC/POS command input
```

---

##  Supported Commands

| ESC/POS Command | Bytes          | Description              |
|-----------------|----------------|--------------------------|
| Initialize      | `\x1B\x40`      | Reset printer            |
| Bold Mode       | `\x1B\x21\x20`  | Enable bold printing     |
| New Line        | `\x0A`          | Line feed                |
| ASCII Text      | `0x20–0x7E`     | Normal printable chars   |

> Future support: alignment, underline, QR, barcode, etc.

---

##  Output Example (Terminal)

```
[Initialize Printer]
[Set Print Mode: 32]
Hello, world!

```

---
