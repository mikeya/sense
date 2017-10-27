function log(data) {
	console.log(data);
}

function update(ob, spec) {
		for(var prop in ob){
        if(typeof ob[prop] !== 'object'){
            continue;
        }
        if(spec.hasOwnProperty('$assign')){
            update(Object.assign(ob, spec['$assign']), spec['$assign']);
        }else{
            update(ob[prop], spec[prop] ? spec[prop] : spec);
        } 
    }
    return ob;
}


let data = {
	users: {
  	50: {
    	id: 50,
      name: 'Kyle',
      roles: ['person', 'admin']
    },
    51: {
    	id: 51,
      name: 'Paul',
      roles: ['person']
    },
  },
};

// add user 52
let newData = update(data, {
  users: {
  	$assign: {
    	52: {
      	id: 52,
        name: 'Parth',
        roles: ['person'],
      }
    }
  }
});

log(newData);

//update user 51's name
newData = update(newData, {
  users: {
    51: {
      $assign: {
        name: 'Paul McPaulson',
      },
    },
  },
});

log(newData);

// bonus
/*
newData = update(newData, {
	users: {
  	50: {
    	name: {
      	$set: 'Kyle Warren'
      },
      roles: {
        $push: 'superuser'
      }
    }
  }
});
log(newData);
*/