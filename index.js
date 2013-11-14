module.exports = faceNormals

function faceNormals(verts, output) {
  var l = verts.length
  if (!output) output = new Float32Array(l)

  for (var i = 0; i < l; i += 9) {
    var p1x = verts[i+3] - verts[i]
    var p1y = verts[i+4] - verts[i+1]
    var p1z = verts[i+5] - verts[i+2]

    var p2x = verts[i+6] - verts[i]
    var p2y = verts[i+7] - verts[i+1]
    var p2z = verts[i+8] - verts[i+2]

    var p3x = p1y * p2z - p1z * p2y
    var p3y = p1z * p2x - p1x * p2z
    var p3z = p1x * p2y - p1y * p2x

    var mag = Math.sqrt(p3x * p3x + p3y * p3y + p3z * p3z)
    if (mag === 0) {
      output[i  ] = 0
      output[i+1] = 0
      output[i+2] = 0

      output[i+3] = 0
      output[i+4] = 0
      output[i+5] = 0

      output[i+6] = 0
      output[i+7] = 0
      output[i+8] = 0
    } else {
      p3x = p3x / mag
      p3y = p3y / mag
      p3z = p3z / mag

      output[i  ] = p3x
      output[i+1] = p3y
      output[i+2] = p3z

      output[i+3] = p3x
      output[i+4] = p3y
      output[i+5] = p3z

      output[i+6] = p3x
      output[i+7] = p3y
      output[i+8] = p3z
    }
  }

  return output
}
