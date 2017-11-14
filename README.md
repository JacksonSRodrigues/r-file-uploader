# r-file-browser
 A react component which gives your custom component or control capability to open up and select files from you desktop


## How to
 
 ### Install
 ``` sh
 npm install r-file-browser --save
 ```

 ### Use
``` js
 import { FileBrowser } from 'r-file-browser'

export class MyCustomPage extends React.Component {

  onFileSelect(files) {
    console.log('process files')
  }

  render() {
    return <div>
      
      
      
    <FileBrowser 
      onSelect={this.onFileSelect.bind(this)}>
      <Button>Browse Files</Button>
    </FileBrowser>
      
      
      
    <div>
  }
}


```