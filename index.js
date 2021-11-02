AFRAME.registerComponent('dynamic-content-loader', {
    init: function() {
        // Create an entity with document.createElement()
        // Add a geometry component to it (a sphere primitive)
        // Add a material component to it (red colour)
        // Set its position within the 3D world
        // Append the entity to the scene (this.el.sceneEl)
        const entity = document.createElement('a-entity');
        const TestSphere = document.createElement('a-sphere');
        const TestCone = document.createElement('a-cone');
        const TestCylinder = document.createElement('a-cylinder');

        entity.setAttribute('geometry', {
            primitive: 'sphere'
        });

        TestSphere.setAttribute('material', {
            color: 'green'
        });

        TestCone.setAttribute('material', {
            color: 'yellow'
        });

        TestCylinder.setAttribute('material', {
            color: 'magenta'
        });

        entity.setAttribute('material', {
            color: 'red'
        });

        entity.setAttribute('position', {
            x: 0,
            y: 1,
            z: -5
        });

        TestSphere.setAttribute('position', {
            x: 0,
            y: 0,
            z: -5
        });

        TestCone.setAttribute('position', {
            x: -5,
            y: 0,
            z: 0
        });

        TestCylinder.setAttribute('position', {
            x: 0,
            y: 0,
            z: 5
        });

        this.el.sceneEl.appendChild(entity);
        this.el.sceneEl.appendChild(TestSphere);
        this.el.sceneEl.appendChild(TestCone);
        this.el.sceneEl.appendChild(TestCylinder);
    }
});