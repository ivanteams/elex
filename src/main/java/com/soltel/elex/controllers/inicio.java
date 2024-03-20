package com.soltel.elex.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class inicio {
    @GetMapping("/inicio")
    @ResponseBody
    public String welcome() {
        return "<h1>Bienvenidos</h1>";
    }
}
