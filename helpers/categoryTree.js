module.exports = (categories)=>{
    const tree= createTree(categories);
    return tree;
}
function createTree(categories,parentId=""){
    const tree=[]

    categories.forEach((element) => {
        if(element.parentId===parentId){
            const newItem=element;
            const child = createTree(categories, element._id.toString())

            if(child.length>0){
                newItem.child=child;

            }   

            tree.push(newItem);


        }
    });

    return tree;
} 