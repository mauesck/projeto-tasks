function editTask(taskId) {
    document.getElementById(`iconEdit_${taskId}`).style.display = 'none';
    document.getElementById(`iconSave_${taskId}`).style.display = 'block';
    document.getElementById(`iconCancel_${taskId}`).style.display = 'block';

    document.getElementById(`editDescription_${taskId}`).style.display = 'flex';
    document.getElementById(`editData_${taskId}`).style.display = 'flex';

    document.getElementById(`description_${taskId}`).style.display = 'none';
    document.getElementById(`data_${taskId}`).style.display = 'none';
    //document.getElementById(`editRow_${taskId}`).style.display = 'table-row';
    document.querySelector(`#editDescription_${taskId}`).focus();
}

function cancelEditTask(taskId) {
    document.getElementById(`iconEdit_${taskId}`).style.display = 'block';
    document.getElementById(`iconSave_${taskId}`).style.display = 'none';
    document.getElementById(`iconCancel_${taskId}`).style.display = 'none';

    document.getElementById(`editDescription_${taskId}`).style.display = 'none';
    document.getElementById(`editData_${taskId}`).style.display = 'none';

    document.getElementById(`description_${taskId}`).style.display = 'flex';
    document.getElementById(`data_${taskId}`).style.display = 'flex';
}

function updateTask(taskId) {
    const id = document.getElementById(`id_${taskId}`).textContent;
    const description = document.getElementById(`editDescription_${taskId}`).value;
    const data = document.getElementById(`editData_${taskId}`).value;

    if (description != '' && data != '') {

        // Criar objeto com os dados da tarefa
        const taskData = {
            id: id,
            description: description,
            data: data
        };

        // Fazer uma solicitação HTTP POST para enviar os dados ao servidor
        fetch('/task/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Tarefa atualizada com sucesso!');
                    // Faça alguma ação, como redirecionar para outra página ou atualizar a visualização da página
                    location.reload();
                } else {
                    console.error('Erro ao atualizar a tarefa:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Erro ao atualizar a tarefa:', error);
            });
    } else {
        alert('Preencha os campos corretamente.')
    }
}

function deleteTask(taskId) {
    const id = document.getElementById(`id_${taskId}`).textContent;

    const taskData = {
        id: id
    };

    fetch('/task/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
        .then(response => {
            if (response.ok) {
                console.log('Tarefa deletada com sucesso!');
                // Faça alguma ação, como redirecionar para outra página ou atualizar a visualização da página
                location.reload();
            } else {
                console.error('Erro ao atualizar a tarefa:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro ao atualizar a tarefa:', error);
        });
}