import express from "express";
import {create} from 'express-handlebars'
import indexRoutes from './routes/index.routes'
import  path  from "path";
import morgan from "morgan";

const app = express();


app.set("views", path.join(__dirname, "views"));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//usando morgan
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
//app.engine(
  //  ".hbs",
    //exphbs ({
      //  layoutsDir: path.join(app.get("views"), "layouts"),
        //defaultLayout: "main",
        //extname: ".hbs",
   // })
//); 

//app.set("view engine", ".hbs");

//routes
app.use(indexRoutes)

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;