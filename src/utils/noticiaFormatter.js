const noticiaFormatter = noticia => {
  return noticia
    .replace('<h2>', '<h2 style="font-size:65px">')
    .replace('<p>', '<p style="font-size:70px">')
    
};

export default noticiaFormatter;