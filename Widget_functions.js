window.functionContainer = {
    Widget_function: () => {
        self.ctx.widget.config.settings.yaxis.max = 10;
        console.log("Function 1 executed!", self);
        const flot = self.ctx.$scope.flotWidget.flot;
        flot.options.yaxes[0].max = 10;
        flot.update();
        flot.redrawPlot();
    },
    Widget_function2: () => {
        self.ctx.widget.config.settings.yaxis.min = -5;
        console.log("Function 2 executed!");
        const flot = self.ctx.$scope.flotWidget.flot;
        flot.options.yaxes[0].min = -5;
        flot.update();
        flot.redrawPlot();
    },
    Widget_function3: () => {
        self.ctx.widget.config.settings.yaxis.max = 100;
        console.log("Function 3 executed!");
        const flot = self.ctx.$scope.flotWidget.flot;
        flot.options.yaxes[0].max = 100;
        flot.update();
        flot.redrawPlot();
    }
};
