class Paciente{
    constructor(nome, identificacao, status){
        this.nome = nome;
        this.identificacao = identificacao;
        this.status = status;
        this.next = null;
    }
};

class Pacientes {
    constructor(head = null) {
        this.head = head
        this.counter = 0;
    }

    size(){
        return this.counter;
    }

    adicionar(head){
        let node = this.head;
        this.counter++;

        if(node == null){
            this.head = head;
            return;
        }

        while(node.next){
            node = node.next;
        }

        node.next = head;
    }

    remover(id){
        this.counter--;
        let node = this.head;

        if(node!==null){
            node = node.next;
            this.head = node;
        }
        else
            throw Error("Index Out of Bound");

        return;
    }

    listar(){
        if(this.counter === 0){
            console.log("Nenhum paciente está na lista");
            return;
        }

        for(let i = 0; i < this.counter; i++){
            const {nome, status, identificacao} = this.acessar_paciente(i);
            console.log(`\n| Nome: ${nome}, Status: ${status}, Identificação: ${identificacao}`);
        }
    }

    acessar_paciente(index){
        let node = this.head;
    
        if(index==0) {
            return this.head;
        }
        while(index--){
            if(node.next!==null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        return node;
    }
    
}

let list = new Pacientes();

function adicionarPaciente(nome, identificacao, status){
    const paciente = new Paciente(nome, identificacao, status);
    list.adicionar(paciente);
}

function removerPaciente(){
    list.remover();
}

function listarPacientes(){
    list.listar();
}

adicionarPaciente("Natalia", 1, 'estável');
adicionarPaciente('Joana', 2, 'estável');
adicionarPaciente('Maria', 3, 'em tratamento intensivo')

list.listar();


// listaDePacientes.adicionar_paciente(1, "Giovanna", "Estável")
// listaDePacientes.adicionar_paciente(2, "Lucas", "Tratamento intensivo")
// listaDePacientes.adicionar_paciente(3, "Alex", "Crítico")
// listaDePacientes.adicionar_paciente(4, "Beatriz", "Estável")

// listaDePacientes.listar_pacientes()

// listaDePacientes.remover_paciente(3)

// listaDePacientes.listar_pacientes()