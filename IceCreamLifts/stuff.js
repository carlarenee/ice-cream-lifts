<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderP()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderC()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderI()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderH()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderB()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderS()}
</ScrollView>
<ScrollView horizontal={true} style={styles.exercise}>
  {this.renderT()}
</ScrollView>


heroku pg:psql DATABASE_URL --app rocky-tor-16900

heroku pg:psql --app rocky-tor-16900 ./lib/schema.sql
