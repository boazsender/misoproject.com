var col = new Miso.Column({ 
  name: 'inoculated', 
  type: 'boolean', 
  data: [true, false, false, true] 
});

log (col.numericAt(0));
log (col.numericAt(1));