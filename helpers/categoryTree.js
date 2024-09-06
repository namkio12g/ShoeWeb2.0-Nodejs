
function getSubCategories(node, idLookUp,flag=false) {
    let lookingFors=[]

    if(flag){
        node.forEach((element) => {
        lookingFors.push(element._id.toString())
        if (element.child) {
            const list = getSubCategories(element.child, idLookUp, true)
            if (list.length > 0)
                lookingFors = lookingFors.concat(list)
        }
        
        })
        return lookingFors;
            }
    else{
    node.forEach((element) => {
        if (element._id.toString() == idLookUp) {
            lookingFors.push(element._id.toString())
            if(element.child){
             const list =getSubCategories(element.child, idLookUp, true)

            lookingFors=lookingFors.concat(list)
            }
        }
        else if(element.child){
            const list= getSubCategories(element.child, idLookUp)
            if(list.length>0)
                lookingFors = lookingFors.concat(list)
             }
           
    });
    }
    return lookingFors;
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
module.exports = {
    createTree,
    getSubCategories
};