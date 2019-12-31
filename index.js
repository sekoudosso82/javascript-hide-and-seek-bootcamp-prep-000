function getFirstSelector(selector)
{
  const result = document.querySelector(selector)
  return result
}

function nestedTarget()
{
  var elements = document.getElementsByClassName('target')
  return elements
}

function deepestChild()
{
  const result= document.querySelector('div."grand-node"  div')
  return result
}