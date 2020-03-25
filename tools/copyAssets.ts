import * as shelljs from 'shelljs'

// Copy all the view templates
shelljs.cp( "-R", "src/views", "dist/" );