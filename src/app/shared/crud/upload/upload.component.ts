import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild("fileUploadInput")
  fileUploadInput: any;

  @Input()
  dataModelList: DataModel[];

  logObject: any;

  bindArray: any;
  
  constructor() { }

  ngOnInit() {
  }

  getbindHeadersDataModelListArray(headers){
    let bindArray = [];
    headers.forEach(header => {

    });

    return headers;

  }

  selectFile($event){
    let fileList = $event.srcElement.files;
    let file = fileList[0];
    if(file && file.name.endsWith(".csv")){
      let input = $event.target;
      let reader = new FileReader();    
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result; 
        let csvRecordsArray = csvData.split(/\r\n|\n/);   
        let headers = csvRecordsArray && csvRecordsArray.length>0 ? csvRecordsArray[0].split(";") : [];
        // bind headers with dataModelList 
        let bindArray = this.getbindHeadersDataModelListArray(headers);

        ['ref', 'quantite', 'prixunitaire']
        [
          {
            columnName: 'ref', 
            columnReference: 'Quantite',
            dataType: 'text'
          }
        ]

        [

        ]
        {
          
        }

        [
          new Produit(...),
          ...
        ]


        this.logObject = bindArray;
        };
    }
  }
}