/** JS code to implement the approach 
Time Complexity:
    Put() operation: O(1) i.e. time required to insert or update new key-value pair is constant
    Get() operation: O(1) i.e. time required to get the value of a key is constant
Auxiliary Space: 
    O(N) where N is the capacity of the Cache.
*/
class LRUCache {
  constructor(n) {
    this.csize = n;
    this.dq = [];
    this.ma = new Map();
  }

  refer(x) {
    if (!this.ma.has(x)) {
      if (this.dq.length === this.csize) {
        const last = this.dq[this.dq.length - 1];
        this.dq.pop();
        this.ma.delete(last);
      }
    } else {
      this.dq.splice(this.dq.indexOf(x), 1);
    }

    this.dq.unshift(x);
    this.ma.set(x, 0);
  }

  display() {
    console.log(this.dq);
  }
}

const cache = new LRUCache(4);

cache.refer(1);
cache.refer(2);
cache.refer(3);
cache.refer(1);
cache.refer(4);
cache.refer(5);
cache.display();

// This code is contributed by phasing17
