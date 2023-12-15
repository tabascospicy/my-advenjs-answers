function findNaughtyStep(original, modified) {
  // Code here
  const [tocompare,stepContent] = original?.length > modified?.length ? [modified,original] : [original,modified]
  
  return stepContent.split("")?.find((step,index)=>tocompare?.[index] !== step) || ""
}