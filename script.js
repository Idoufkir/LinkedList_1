// Construct 
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  // insert Clear Remove Get (index)
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert first node
    insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
  
    // Insert last node
    insertLast(data) {
      let node = new Node(data);
      let current;
  
      // If empty, make head
      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;
  
        while (current.next) {
          current = current.next;
        }
  
        current.next = node;
      }
  
      this.size++;
    }
  
    // Insert at index
    insertAt(data, index) {
      //  If index is out of range
      if (index < 0 || index > this.size || index == "") {
        return;
      }
  
      // If first index
      if (index == 0) {
        this.insertFirst(data);
        return;
      }
  
      const node = new Node(data);
      let current, previous;
  
      // Set current to first
      current = this.head;
      let count = 0;
  
      while (count < index) {
        previous = current; 
        count++;
        current = current.next; 
      }
  
      node.next = current;
      previous.next = node;
  
      this.size++;
    }
  
    // get index
    getAt(index) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count == index) {
          document.getElementById("res").innerHTML = current.data;
          
        }
        count++;
        current = current.next;
      }
  
      return null;
    }
  
    // Remove index
    removeAt(index) {
      if (index > 0 && index > this.size) {
        return;
      }
  
      let current = this.head;
      let previous;
      let count = 0;
  
      // Remove first
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count++;
          previous = current;
          current = current.next;
        }
  
        previous.next = current.next;
      }
  
      this.size--;
    }
  
    // Clear list
    clearList() {
      this.head = null;
      this.size = 0;
    }
  
    // Print list 
    printListData() {
      let current = this.head;
       var listName = []
      while (current) {
        listName.push(current.data);
        current = current.next;
      }
      return listName;
    }
  }
  
  const ll = new LinkedList();
  
  
  function addFirst(){
      var nam = document.getElementById('input-field').value;
      ll.insertFirst(nam);
     
  }
  function addlast(){
      var nam = document.getElementById('input-field').value;
      ll.insertLast(nam);
  }
  function insertAt(){
      var nam = document.getElementById('input-field').value;
      var index = document.getElementById('indice').value;
      ll.insertAt(nam,index);
  }
  function affichAt() {
              var index = document.getElementById('indice').value;
              ll.getAt(index);
          }
          function affichAll(){
              var names, text, fLen, i;
              names = ll.printListData();
          fLen = names.length;
  
          text = "<ol>";
          for (i = 0; i < fLen; i++) {
          text += "<li>" + names[i] + "</li>";
          }
          text += "</ol>";
  
  document.getElementById("res1").innerHTML = text;
  }
  function supAt(){
      var index = document.getElementById("indice").value;
      ll.removeAt(index)
  }
  function supAll(){
      ll.clearList();
  } 
   
  
   
  