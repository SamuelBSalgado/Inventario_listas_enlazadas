class Inventory{
    constructor(){
        this._primero = null;
    }

    insert(nuevo, position){
        if(this._primero == null && position != 1){
            return false;
        }
        if(this._primero == null && position == 1){
            this._primero = nuevo;
            return true;
        }
        let temp = this._primero;
        let count = 1;
        while(temp != null){
            if(count == position && position == 1){
                this._primero = nuevo;
                nuevo.next = temp;
                return true;
            } else if(count+1 == position){
                nuevo.next = temp.next;
                temp.next = nuevo;
                return true;
            } else if(temp.next == null && count<position){
                temp.next = nuevo;
                nuevo.next = null;
                return true;
            }
            temp = temp.next;
            count++;
        }
        return false;
    }

    add(product){
        if(this._primero == null){
            this._primero = product;
            this._primero.next = null;
        }else{
            this.addElse(product,this._primero);
        }
    }

    addElse(product,item){
        if(item.next == null){
            item.next = product;
        }else{
            this.addElse(product, item.next);
        }
    }

    list(){
        let list="";
        let temp = this._primero;
        while(temp != null){
            list += "<" + temp._code+"." + "> Nombre: " + temp._name+"." + " Costo: " + temp._price+"." + " Cantidad: " +
            temp._quantity+"." + "<br>" + "<br>";
            temp = temp.next;
        }
        return list;
    }

    backwardsList(){
        let backList="";
        let tempList = "";
        let temp = this._primero;
        while(temp != null){
            tempList = backList;
            backList = "";
            backList += "<" + temp._code + "> Nombre: " + temp._name+"." + " Costo: " + temp._price+"." + " Cantidad: "
            + temp._quantity+"." + "<br>" + "<br>" + tempList;
            
            temp = temp.next;
        }
        return backList;
        }

    search(code){
        if(this._primero == null){
            return false;
        }
        let temp = this._primero;
        while(temp != null){
            if(temp._code == code){
                return "Código: " + temp._code+"."+ " Nombre: " + temp._name+"." + " Precio " + temp._price+"." +
                "Cantidad: " + temp._quantity+".";
            }
            temp = temp.next;
        }
        return null;
    }

    delete(code){
        if(this._primero == null){
            return false;
        }else if(this._primero._code == code){
            this._primero = this._primero.next;
            return;
        }
        let temp = this._primero;
        while(temp != null){
            if(temp.next._code == code){
                temp.next = temp.next.next;
                return;
                
            }else{
                temp = temp.next;
            }
        }
        return false;
    }
}