class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v2.adjacent.add(v1)
    v1.adjacent.add(v2)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex)
    for (let node of this.nodes) {
      node.adjacent.delete(vertex)
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let visited = []
    while (toVisitStack.length > 0) {
      let currNode = toVisitStack.pop();
      visited.push(currNode.value)
      console.log('@ ', currNode.value)
      for (let neighbor of currNode.adjacent) {
        console.log('check ', neighbor.value)
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    console.log(visited)
    return visited;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let visited = [start.value]
    while (toVisitStack.length > 0) {
      let currNode = toVisitStack.shift();
      for (let neighbor of currNode.adjacent) {
        if (!seen.has(neighbor)) {
          toVisitStack.push(neighbor);
          visited.push(neighbor.value)
          seen.add(neighbor);
        }
      }
    }
    console.log(visited)
    return visited
  }
}

module.exports = { Graph, Node }