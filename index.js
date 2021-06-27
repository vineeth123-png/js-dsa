console.log("Hello world!");
const arr = [];
for(let i = 0; i<100; i++){
  arr.push(Math.floor(Math.random() * 10001))
}
console.log(arr);
const bubbleSort = (arr) => {
  for(let i = 0; i<arr.length; i++){
  let check = false;
  for(let j = 0; j<arr.length; j++){
    if(arr[j] > arr[j+1]){
      check = true;
      //swap(arr[j], arr[j+1]);
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
    }
  }
  if(!check) break;
  }
}

const insertionSort = (arr) => {
  for(let i = 1; i<arr.length; i++){
    let key = i; let val = arr[key];
    let ptr = key-1;
    while(ptr >= 0 && arr[ptr] > val){
      arr[ptr+1] = arr[ptr]; ptr--;
    }
    arr[ptr+1] = val;
    //console.log(`Iteration ${i}`, arr);
  }
}

const merge = (list1, list2) => {
  // let ptr1 = 0, ptr2 = 0;
  const list = [];
  // while(ptr1 < list1.length && ptr2 < list2.length){
  //   if(list1[ptr1] < list2[ptr2]){
  //     list.push(list1[ptr1]); ptr1++;
  //   } else {
  //     list.push(list2[ptr2]); ptr2++;
  //   }
  // }
  while(list1.length && list2.length) {
    if(list1[0] < list2[0]) list.push(list1.shift());
    else list.push(list2.shift());
  }

  return list.concat(list1, list2);
  //return list;
}

const mergeSort = (arr) => {
  //console.log('In mergesort function!');
  let len = arr.length;
  if(len < 2) return arr;
  const list1 = arr.slice(0, len/2);
  const list2 = arr.slice(len/2);
  //console.log(list1, list2);
  // const sorted_list1 = mergeSort(list1);
  // const sorted_list2 = mergeSort(list2);
  //console.log(sorted_list1, sorted_list2);
  return merge(mergeSort(list1), mergeSort(list2));
}

const partition = (arr, pivot) => {
  const left = [], right = [];

  while(arr.length) {
    if(arr[0] < pivot) left.push(arr.shift());
    else right.push(arr.shift());
  }
  return {left, right};
}

const quickSort = (arr) => {
  let len = arr.length;
  if(len < 2) return arr;
  let pivot = arr.pop();
  const {left, right} = partition(arr, pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

arr1 = quickSort(arr);

console.log(arr1);