#gatsby-browser.js 
  is one of a handful of special files that Gatsby looks for,
  and uses (if they exist). Here, the naming of the file is important.
  If you do want to explore more now, check out the docs 
  https://www.gatsbyjs.org/docs/browser-apis/

#In most cases, the best way to add global styles is with a shared layout component

global-styles/
  └───src/
      └───components/
+     │   │─  layout.js
+     │   └─  layout.css
      │
      └───pages/
          └─  index.js
          
  Inside src/components/layout.css, add some global styles:

  src/components/layout.css
  
      import React from "react"
      import "./layout.css"

      export default ({ children }) => <div>{children}</div>
    
  Finally, update src/pages/index.js to use the new layout component:
  
  src/pages/index.js
  import React from "react"
  import Layout from "../components/layout"
  
  export default () => <Layout>Hello world!</Layout>
  
  