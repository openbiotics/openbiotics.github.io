import React, { Component } from "react"
import { globalHistory } from '@reach/router'
import * as THREE from 'three'

class TestPage extends Component {
    constructor() {
        super()
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
    }

    componentDidMount() {
        globalHistory.listen(() => {
            console.log("hi")
            this.renderer.domElement.remove()
        })

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
        camera.position.z = 5

        // make cubes
        const makeCube = (scene, geometry, color, x) => {
            const material = new THREE.MeshPhongMaterial({ color })
            const cube = new THREE.Mesh(geometry, material)

            scene.add(cube)
            cube.position.x = x

            return cube
        }

        const geometry = new THREE.BoxGeometry()
        const cubes = [
            makeCube(scene, geometry, 0x44aa88, 0),
            makeCube(scene, geometry, 0x8844aa, -2),
            makeCube(scene, geometry, 0xaa8844, 2)
        ]

        // set up light
        const color = 0xffffff
        const intensity = 1
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(-1, 2, 4)
        scene.add(light)

        const animate = (time) => {
            requestAnimationFrame(animate)

            time *= 0.001

            cubes.forEach((cube, ndx) => {
                const speed = 1 + ndx * .1
                const rot = time * speed
                cube.rotation.x = rot
                cube.rotation.y = rot
            })

            this.renderer.render(scene, camera)

        }

        animate()
    }

    render() {
        return <div>
        </div>
    }
}

export default TestPage