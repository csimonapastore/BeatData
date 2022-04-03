//	https://www.codewars.com/kata/5241060ff2471a5d7600025a/train/javascript

function Archiver() {
    var temperature = null;
    var archive = [];   
  
    Object.defineProperty(this, 'temperature', {
      get: function() { 
        return temperature; 
      },
      set: function(value) { 
        temperature = value;
        archive.push({date: new Date(), val: value});
      }
    });
   
    this.getArchive = function() {
      return archive;      
    };  
}