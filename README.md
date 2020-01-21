## Welcome to swarm picker

This is a quick and simple app to help teams pick a swarm idea from a list of topics from a bertha URL.

### Constructing a URL 


https://bertha.ig.ft.com/{view|republish}/publish/gss/{spreadsheetKey}/{sheetNames}

#### view/republish 

view: serve the JSON from the cache, but make it first if it doesn't exist.
republish: purge the cache and serve a fresh version of the JSON.
spreadsheetKey The Google Key of the Spreadsheet. Get this from the URL of the spreadsheet.

#### sheetNames 

A comma separated list of sheet names (as they appear in the tabs in the spreadsheet). 

Examples:

```
/Sheet1
/Sheet1,Sheet2,Sheet3
Not all sheets need to be included in the JSON.
```

Sheets are be optional if prepending with a '+'. In the example below the foo is a mandatory sheet but bar and baz are optional:
```
/foo,+bar,+baz
```
--

A complete example might look like this:

https://bertha.ig.ft.com/view/publish/gss/ewrew98uiewr-809832432321mdwl/data,options,credits

