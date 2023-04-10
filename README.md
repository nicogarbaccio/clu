# CLU
### A very simple CLI tool that brings the power of OpenAI right to your terminal. Rather than googling commands and scanning docs any time you forgot the syntax for something, this tool eliminates all that frustration!

## Installation & Setup

`npm install`

`cp .env.example .env`
=> Add your API KEY from [OpenAI](https://openai.com/api/)

To set up as a global command,

1. run `chmod -x cli.js`
2. run `npm link` while in the project folder

## Usage

Call `clu p "<your prompt>"` from any folder to call OpenAI.

Examples:

- `clu p "what's the git command for saving a commit?"`
- `clu p "what's the current weather in New Jersey?"`
- `clu p "can chips be dinner?"`

### Writing files

You can write the OpenAI API response to a file using the `-o <filname>` syntax

Example: `clu p "generate a CSS file with a modern theme that uses the Spotify color pallette" -o style.css`
