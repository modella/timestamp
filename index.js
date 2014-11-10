
/**
 * Expose `timestamps()`.
 */

module.exports = timestamps;

/**
 * Add timestamps to `model`.
 *
 * @param {Function} model
 * @api public
 */

function timestamps(model) {
  model.attr('createdAt');
  model.attr('updatedAt');
  model.on('saving', function(obj, fn){
    var now = new Date;
    if (!obj.createdAt()) obj.createdAt(now);
    obj.updatedAt(now);
    fn();
  });
}
