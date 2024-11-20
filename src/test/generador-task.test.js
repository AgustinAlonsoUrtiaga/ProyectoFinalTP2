const {expect} = require('chai');
const generador = require('./generador/task.js');

describe('***** Test del generador de tareas *****', () => {
    it('La tarea debe contener los campos definidos en el modelo', () => {
        const tarea = generador.get();

        expect(tarea).to.include.keys(
            'title',
            'description',
            'urgent',
            'estimatedTime',
            'timeUnit',
            'status',
            'timeUsed',
            'scrumSection',
            'priority',
            'createdDate',
            'dueDate',
            'environment'
        );
    });

    it('Debería generar tareas aleatorias', () => {
        const tarea1 = generador.get();
        const tarea2 = generador.get();

        expect(tarea1.description).not.to.eql(tarea2.description);
        expect(tarea1.estimatedTime).not.to.eql(tarea2.estimatedTime);
        
        expect(tarea1.scrumSection).not.to.eql(tarea2.scrumSection);
        expect(tarea1.priority).not.to.eql(tarea2.priority);
    });


    it('Debería generar valores válidos para los campos predeterminados', () => {
        const tarea = generador.get();

        expect(tarea.urgent).to.be.a('boolean');
        expect(tarea.estimatedTime).to.be.a('number');
        expect(tarea.priority).to.be.a('number').and.to.be.within(1, 5);
        expect(tarea.createdDate).to.be.instanceOf(Date);
        expect(tarea.dueDate).to.be.instanceOf(Date);
    });
});
