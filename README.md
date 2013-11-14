# face-normals [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Given an array of triangles' vertices, return a `Float32Array` of their normal
vectors. Helpful for quickly calculating the the normals of a mesh (assuming
it's made up of triangles).

[see the demo](http://hughsk.github.io/face-normals), and how it compares to
[`heightmap-mesher`](http://hughsk.github.io/heightmap-mesher)'s, for some
example usage.

## Installation ##

[![face-normals](https://nodei.co/npm/face-normals.png?mini=true)](https://nodei.co/npm/face-normals)

## Usage ##

### `require('face-normals')(triangles, [output])` ###

Takes an array-like list of `triangles`. Each vertex should take up 3 elements,
combined into groups of 3 to make each triangle. Optionally, you can pass in
an array-like `output` object to set the values directly. If not, a
`Float32Array` will be created for you - either way, the new/updated array will
be returned.
