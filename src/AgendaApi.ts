import Agenda from "./Agenda";



{/* let reserva = [
        {
            Nombremodelo: 'Andrea',
            Telefono: '3126789023',
            Fecha: '23/12/2024',
            Hora: '3:45 p.m',
            Servicio: 'mantenimiento'
        },
        {
            Nombremodelo: 'Andrea',
            Telefono: '3145673412',
            Fecha: '23/12/2024',
            Hora: '3:00 p.m.',
            Servicio: 'reparacion'
        }
    ]; */}

export async function searchAgendas () {

    const response = await fetch("http://localhost:8080/api/agendas",  {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json" 
        }
    })

    return await response.json();

}

export async function removeAgenda (id: string) {

    await fetch("http://localhost:8080/api/agendas/" + id,  {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json" 
        }
    })

    

}

export async function saveAgenda (agenda: Agenda) {
    await fetch("http://localhost:8080/api/agendas",  {
        "method": "POST",
        "body": JSON.stringify(agenda),
        "headers": {
            "Content-Type": "application/json" 
        }
    })
}

export async function searchAgendaByNombre (id : string) {

    const response = await fetch("http://localhost:8080/api/agendas/" + id,  {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json" 
        }
    })

    return await response.json();

}