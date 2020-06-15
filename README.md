# monetize-files

monetize-files is a CLI tool that helps you add web monetization tags
It adds the *monetization meta tag*  to all the files (of the desired extension) within the selected folder and its subfolders.

## Installation

To get monetize-files in your system, you may use and configure it as a global package:
`npm install -g monetize-files`

You can also add it as a dev-dependency to your project (*but this may require you to add the monetize script to your package.json*)
`npm install --save-dev monetize-files`

## Usage

To get a quick help at the command line for the *monetize-files* CLI tool, you can execute:
`monetize-files -h`

It will show you a list of options that you can pass as arguments to the CLI tool

![help image](https://drive.google.com/uc?id=1osote_iQPcbnVvu6agwI9JB53ox24rjq)

#### Quickstart

Once you are inside the folder where you want to web-monetize your desired files, you execute:
`monetize-files -w 'your wallet address'`

This will simply add the *meta monetization tag* with the provided wallet address to all the **(by default) html** files in your project.

#### Customization

If you work with **other filetypes** such as *haml*, *pug*, *ejs* or any other filetype, you can monetize those types of files only by executing:
`monetize-files -w 'your wallet address' -f 'pug'`
monetize files will now search only for those files ending with *.pug* and add the *meta monetization tag* to those files only.

![working](https://drive.google.com/uc?id=1ivTPD8FUKRrRZjVfOleTIUht8_-_jtxb)

If you want to **exclude any folders** from being web-monetized, you can execute:
`monetize-files -w 'you wallet address' -e 'assets, ../scripts, ./stylesheets/css'`
*monetize-files* will exclude those folders (and the files within them from being web-monetized).

If you have installed *monetize-files* as a dev-dependency to your project, you will need to add a **monetize script** to your *package.json*.
```json
"scripts": {
    "monetize": "monetize-files -w 'your wallet address'"
  }
```
Now you can just execute:
`npm run monetize`


## Working

*monetize-files* simply adds the *meta monetization tag* to the beginning of the files (it works on)

```html
<head>
    <meta name='monetization' content='YOUR_PROVIDED_WALLET'>
</head>
```

If the file already contains a *meta monetization tag*, it does not add the same to it again.

