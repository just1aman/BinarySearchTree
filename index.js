class BinarySearchTreeNode
{
  constructor (value)
  {this.value=value
  this.right= null
  this.left=null
  }
}

class BinarySearchTree
{
  constructor()
  {
  //let node = new BinarySearchTreeNode(value)
  this.root=null
  }

  insert(value)
  {
    let newNode = new BinarySearchTreeNode(value)
    if(this.root==null)
    {
      this.root=newNode
    }
    else
    {
    let currentNode=this.root
    
      while(true)
      {
        if(currentNode.value>value)
        {
          if(!currentNode.left)
          {currentNode.left=newNode
          return this
          }
          else
          {currentNode=currentNode.left
          }
        }
        else
        {
         if(!currentNode.right)
          {currentNode.right=newNode
          return this}
          else
          {currentNode=currentNode.right}
        }
      }
    }
    
  }

}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

bst=new BinarySearchTree(5)
bst.insert(10)
bst.insert(15)
bst.insert(13)

JSON.stringify(traverse(bst.root))