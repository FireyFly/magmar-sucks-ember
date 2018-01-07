export default function() {
  this.transition(
    this.fromRoute('loading'),
    this.use('crossFade'),
    this.reverse('crossFade')
  );
  this.transition(
    this.fromRoute('index'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('current'),
    this.toRoute(['pre-update-one', 'pre-update-two', 'pre-usm']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('pre-usm'),
    this.toRoute(['pre-update-one', 'pre-update-two']),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('pre-update-one'),
    this.toRoute('pre-update-two'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.toRoute('email'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
