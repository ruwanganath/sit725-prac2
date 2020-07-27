var express = require('express');
var app = express();

// class to define the node 
class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

// class to define the linked list
class LinkedList {
    constructor( ) {
      this.head = null;
    }

    //method to add an item to the list
    addItemToList(data){

        // creating the new node with data
        let node = new ListNode(data); 

        // if the list is empty node become the first node of the list (head node)
        if(this.head === null){    
            this.head = node;
        } else {
            
            // assigning head node to currentNode 
            let currentNode = this.head;

            // traverse to the end node( or the last nodes.next == null)
            while(currentNode.next !== null){
                currentNode  = currentNode.next;
            }
            
            //assign the new node to the end of the list
            currentNode.next = node;
        }
    }
}

// function to create the linkedlist using the array
function createLinkedList(accounts) {

    let list = new LinkedList();
    
    // adding each element of the array by iterating using foreach
    accounts.forEach(element => {
        list.addItemToList(element);        
    });

    return list;
}

// function to get a particular list item by id
function getAccountById(id,list){
   
    let currentNode = list.head;
    
    //traverse through list to search the item
    while (currentNode) {
      if (currentNode.data.id === id) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return null;
}

//Defining the array
let accounts = [
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:5}
];

var linkedList = createLinkedList(accounts);

//This end point will display the full list content
app.get('/accounts',function(req,res){
    res.send(linkedList);
});

//This end point will display a particular list item by given id
app.get('/accounts/:id',function(req,res){

    let account = getAccountById(parseInt(req.params.id),linkedList);    

    if (account === null){
        res.send('Account not found');
    }else{
        res.send(account);
    }
});

var port =3000;
app.listen(port);
console.log('Server listening on : '+port);